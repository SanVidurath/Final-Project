package edu.icet.ecom.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    private Integer productId;
    private String productName;
    private Double unitPrice;
    private Integer quantityPurchased;
}
