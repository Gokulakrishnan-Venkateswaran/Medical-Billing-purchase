// src/main/java/com/medicalshop/model/Agency.java
package com.medicalshop.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contactNumber;
    private String email;
    private String address;
}
