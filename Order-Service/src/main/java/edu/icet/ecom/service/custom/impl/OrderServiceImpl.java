package edu.icet.ecom.service.custom.impl;

import edu.icet.ecom.dtos.Order;
import edu.icet.ecom.dtos.OrderDetail;
import edu.icet.ecom.entities.OrderDetailEntity;
import edu.icet.ecom.entities.OrderEntity;
import edu.icet.ecom.repository.custom.OrderDetailRepository;
import edu.icet.ecom.repository.custom.OrderRepository;
import edu.icet.ecom.service.custom.OrderService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderDetailRepository orderDetailRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public void placeOrder(Order order, List<OrderDetail> orderDetailList) {

        OrderEntity savedOrder = orderRepository.save(modelMapper.map(order, OrderEntity.class));

        for (OrderDetail detail : orderDetailList) {
            OrderDetailEntity entity = new OrderDetailEntity(
                    savedOrder,
                    detail.getProductId(),
                    detail.getProductName(),
                    detail.getUnitPrice(),
                    detail.getQuantityPurchased()
            );
            orderDetailRepository.save(entity);
        }


    }
}
