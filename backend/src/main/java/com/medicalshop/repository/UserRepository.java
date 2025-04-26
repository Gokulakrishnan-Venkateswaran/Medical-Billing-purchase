// src/main/java/com/medicalshop/repository/UserRepository.java
package com.medicalshop.repository;

import com.medicalshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsernameAndPassword(String username, String password);
}
