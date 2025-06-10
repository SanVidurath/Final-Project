package edu.icet.ecom.service.custom;

import edu.icet.ecom.dtos.Order;
import edu.icet.ecom.dtos.OrderDetail;

import java.util.List;
import java.util.Map;

public interface OrderService {
    void placeOrder(Order order, List<OrderDetail> orderDetailList);
}
