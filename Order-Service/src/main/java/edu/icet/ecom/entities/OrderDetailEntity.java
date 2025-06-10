package edu.icet.ecom.entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "order_detail")
public class OrderDetailEntity {

    @EmbeddedId
    private OrderDetailsId id;

    @ManyToOne()
    @MapsId("orderId")
    @JoinColumn(name = "order_id")
    private OrderEntity orderEntity;

    @Column(nullable = false, name = "product_id", insertable = false, updatable = false)
    private Integer productId;

    @Column(nullable = false, name = "unit_price")
    private Double unitPrice;

    @Column(nullable = false, name = "quantity_purchased")
    private Integer quantityPurchased;

    @Column(name = "product_name")
    private String productName;

    public OrderDetailEntity(OrderEntity orderEntity, Integer productId, String productName, Double unitPrice, Integer quantityPurchased){
        if(orderEntity == null || orderEntity.getId() == null){
            throw new IllegalArgumentException("OrderEntity with ID cannot be null");
        }
        this.orderEntity=orderEntity;
        this.productId = productId;
        this.productName = productName;
        this.unitPrice=unitPrice;
        this.quantityPurchased=quantityPurchased;

        this.id = new OrderDetailsId(orderEntity.getId(), productId);
    }
}
