// src/main/java/com/medicalshop/repository/PurchaseItemRepository.java
package com.medicalshop.repository;

import com.medicalshop.model.PurchaseItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseItemRepository extends JpaRepository<PurchaseItem, Long> {}
