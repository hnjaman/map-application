package com.hnj.map.repository;

import com.hnj.map.model.Geolocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends JpaRepository<Geolocation, Integer> {
}
