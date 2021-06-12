package com.hnj.map;

import com.hnj.map.model.Geolocation;
import com.hnj.map.repository.MapRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MapServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(MapServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner demoDataInsert(MapRepository mapRepository) {
        return args -> {
            mapRepository.save(new Geolocation(1,"Sylhet", 24.886436, 91.880722));
            mapRepository.save(new Geolocation(2,"Chittagong", 22.341900, 91.815536));
            mapRepository.save(new Geolocation(3,"Khulna", 22.845641, 89.540328));
            mapRepository.save(new Geolocation(4,"Mymensingh", 24.743448, 90.398384));
            mapRepository.save(new Geolocation(5,"Rajshahi", 24.3745, 88.6042));
        };
    }
}
