// src/main/java/com/medicalshop/controller/StockItemController.java
package com.medicalshop.controller;

import com.medicalshop.model.PurchaseItem;
import com.medicalshop.repository.PurchaseItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:3000")
public class StockItemController {

    @Autowired
    private PurchaseItemRepository repository;

    @GetMapping
    public List<PurchaseItem> getAllStockItems() {
        return repository.findAll();
    }
}
