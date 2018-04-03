package fi.academy.paino;

import org.springframework.data.repository.CrudRepository;

public interface PainoRepo extends CrudRepository<PainoTaulu, Integer>{
    // by Heidi ja Elina
    Iterable<PainoTaulu> findAllBykayttajaId(int id);
}
