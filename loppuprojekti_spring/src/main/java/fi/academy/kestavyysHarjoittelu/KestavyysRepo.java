package fi.academy.kestavyysHarjoittelu;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

// by Heidi Ja Elina
public interface KestavyysRepo extends CrudRepository<KestavyysHarjoittelu, Integer> {

    Iterable<KestavyysHarjoittelu> findAllByLajiAndKayttajaId(String laji, String id);

    @Query("SELECT COUNT(k) FROM KestavyysHarjoittelu k WHERE kayttajaId = :id")
    Integer haeMaara(@Param("id") String id);
}
