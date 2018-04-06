package fi.academy.kestavyysHarjoittelu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

// By Heidi ja Elina
// RestKontrolleri, jossa metodit kestavyysharjoitteludatan hakemiseen, poistamiseen ja lisäämiseen

public class KestavyysKontrolleri {

    @Autowired KestavyysRepo kr;

    // Hakee kaikki kestavyysharjoitukset
    @GetMapping("/kestavyys")
    public Iterable<KestavyysHarjoittelu> harjoitukset() {
        Iterable<KestavyysHarjoittelu> kaikki = kr.findAll();

        if (kaikki.equals(null)) {
            throw new RuntimeException("Kestävyysharjoitustietojen hakeminen epäonnistui! Palauttaa NULL");
            // Poikkeuksen käsittely! Mutta missä?
        }
        return kaikki;
    }

    // Hakee yhden kestavyysharjoittelun tiedot id:n perusteella
    @GetMapping("/kestavyys/{id}")
    public ResponseEntity<KestavyysHarjoittelu> etsiTiettyHarjoitus(@PathVariable(name="id") int id) {
        Optional<KestavyysHarjoittelu> optkest = kr.findById(id);
        if (!optkest.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optkest.get());
    }

    // Yhden kestävyysharjoittelun poistaminen id:n perusteella
    @DeleteMapping("/kestavyys/{id}")
    public ResponseEntity<String> poistaHarjoitus(@PathVariable(name="id") int id) {
        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!kr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava harjoitus poistetaan
        kr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden kestävyysharjoituksen lisääminen tietokantaan (lomake)
    @PostMapping("/kestavyys")
    public ResponseEntity<?> uusiHarjoitus(@RequestBody KestavyysHarjoittelu kest) throws URISyntaxException {
        // Tarkistetaan, että lomakkeelta saadulla harjoituksella on tarvittavat arvot
        if (kest.getLaji() == null || kest.getPvm() == null || kest.getKestoMin() == null || kest.getMatkaKm() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        kr.save(kest);
        // URI:n rakentaminen:
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/kestavyys/{id}")
                .buildAndExpand(kest.getKestavyysHarjoitusId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}