// src/main/java/com/medicalshop/model/PurchaseItem.java
package com.medicalshop.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class PurchaseItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private String batchNo;
    private int quantity;
    private double rate;
    private double mrp;
    private String expiryDate;
    private String manufacturingDate;
    private String company;
    private String barcode;
}
