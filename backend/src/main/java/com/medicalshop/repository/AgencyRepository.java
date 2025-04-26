// src/main/java/com/medicalshop/repository/AgencyRepository.java
package com.medicalshop.repository;

import com.medicalshop.model.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgencyRepository extends JpaRepository<Agency, Long> {}
