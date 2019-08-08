package com.back.thedjhub.repositories;

import com.back.thedjhub.entities.DJ;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DJRepository extends CrudRepository<DJ, Long> {
}
