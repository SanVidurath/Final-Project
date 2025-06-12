package edu.icet.ecom.service.custom;

import edu.icet.ecom.dtos.Order;
import edu.icet.ecom.dtos.OrderDetail;

import java.util.List;

public interface OrderService {
    void placeOrder(Order order, List<OrderDetail> orderDetailList);
}
