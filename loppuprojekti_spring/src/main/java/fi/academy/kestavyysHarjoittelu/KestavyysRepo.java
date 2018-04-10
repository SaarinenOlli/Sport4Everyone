package fi.academy.kestavyysHarjoittelu;

import org.springframework.data.repository.CrudRepository;

// by Heidi Ja Elina
public interface KestavyysRepo extends CrudRepository<KestavyysHarjoittelu, Integer> {

    Iterable<KestavyysHarjoittelu> findAllByLaji(String laji);

    Iterable<KestavyysHarjoittelu> findAllByLajiAndKayttajaId(String laji, String id);
}
