package fi.academy.paino;

import org.springframework.data.repository.CrudRepository;

// by Heidi ja Elina
public interface PainoRepo extends CrudRepository<Paino, Integer>{

    Iterable<Paino> findAllBykayttajaId(int id);
}
