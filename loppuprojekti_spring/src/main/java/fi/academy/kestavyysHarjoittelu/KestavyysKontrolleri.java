package fi.academy.kestavyysHarjoittelu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;

// By Heidi ja Elina
// RestKontrolleri, jossa metodit kestavyysharjoitteludatan hakemiseen, poistamiseen ja lisäämiseen

@RestController
@RequestMapping("/laji")
public class KestavyysKontrolleri {

    @Autowired KestavyysRepo kr;

    // UINTI:

    // Hakee yhden käyttäjän uinnit
    @GetMapping ("/uinti/{id}")
    public Iterable<KestavyysHarjoittelu> yhdenKayttajanUinnit(@PathVariable(name = "id") String id) {
        Iterable<KestavyysHarjoittelu> uinnit = kr.findAllByLajiAndKayttajaId("uinti", id);

        if (uinnit.equals(null)) {
            throw new RuntimeException("Uintitietojen hakeminen epäonnistui! Palauttaa NULL");
            // Poikkeuksen käsittely!
        }
       return uinnit;
    }

    // Yhden uintiharjoituksen poistaminen id:n perusteella
    @DeleteMapping("/uinti/{id}")
    public ResponseEntity<String> poistaUinti(@PathVariable(name="id") int id) {
        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!kr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava harjoitus poistetaan
        kr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden uintiharjoituksen lisääminen tietokantaan (lomake)
    @PostMapping("/uinti")
    public ResponseEntity<?> uusiUinti(@RequestBody KestavyysHarjoittelu kest) throws URISyntaxException {
        // Tarkistetaan, että lomakkeelta saadulla harjoituksella on tarvittavat arvot
        if (kest.getKayttajaId() == null || kest.getPvm() == null || kest.getKestoMin() == null || kest.getMatkaKm() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        kr.save(kest);
        // URI:n rakentaminen:
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/uinti/{id}")
                .buildAndExpand(kest.getKestavyysHarjoitusId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // PYÖRÄILY:

    // Hakee yhden käyttäjän pyöräilyt
    @GetMapping ("/pyoraily/{id}")
    public Iterable<KestavyysHarjoittelu> yhdenKayttajanPyorailyt(@PathVariable(name = "id") String id){
        Iterable<KestavyysHarjoittelu> pyorailyt =  kr.findAllByLajiAndKayttajaId("pyöräily", id);

        if (pyorailyt.equals(null)) {
            throw new RuntimeException("Pyöräilytietojen hakeminen epäonnistui! Palauttaa NULL");
            // Poikkeuksen käsittely!
        }
        return pyorailyt;
    }

    // Yhden pyöräilyharjoituksen poistaminen id:n perusteella
    @DeleteMapping("/pyoraily/{id}")
    public ResponseEntity<String> poistaPyoraily(@PathVariable(name="id") int id) {
        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!kr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava harjoitus poistetaan
        kr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden pyöräilyharjoituksen lisääminen tietokantaan (lomake)
    @PostMapping("/pyoraily")
    public ResponseEntity<?> uusiPyoraily(@RequestBody KestavyysHarjoittelu kest) throws URISyntaxException {
        // Tarkistetaan, että lomakkeelta saadulla harjoituksella on tarvittavat arvot
        if (kest.getPvm() == null || kest.getKestoMin() == null || kest.getMatkaKm() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        kr.save(kest);
        // URI:n rakentaminen:
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/pyoraily/{id}")
                .buildAndExpand(kest.getKestavyysHarjoitusId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // JUOKSU:

    // Hakee yhden käyttäjän juoksut
    @GetMapping ("/juoksu/{id}")
    public Iterable<KestavyysHarjoittelu> yhdenKayttajanJuoksut(@PathVariable(name = "id") String id){
        Iterable<KestavyysHarjoittelu> juoksut =  kr.findAllByLajiAndKayttajaId("juoksu", id);

        if (juoksut.equals(null)) {
            throw new RuntimeException("Juoksutietojen hakeminen epäonnistui! Palauttaa NULL");
            // Poikkeuksen käsittely!
        }
        return juoksut;
    }

    // Yhden juoksuharjoituksen poistaminen id:n perusteella
    @DeleteMapping("/juoksu/{id}")
    public ResponseEntity<String> poistaJuoksu(@PathVariable(name="id") int id) {
        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!kr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava harjoitus poistetaan
        kr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden juoksuharjoituksen lisääminen tietokantaan (lomake)
    @PostMapping("/juoksu")
    public ResponseEntity<?> uusiJuoksu(@RequestBody KestavyysHarjoittelu kest) throws URISyntaxException {
        // Tarkistetaan, että lomakkeelta saadulla harjoituksella on tarvittavat arvot
        if (kest.getPvm() == null || kest.getKestoMin() == null || kest.getMatkaKm() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        kr.save(kest);
        // URI:n rakentaminen:
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/juoksu/{id}")
                .buildAndExpand(kest.getKestavyysHarjoitusId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // Hakee kaikki uintiharjoitukset
//    @GetMapping("/uinti")
//    public Iterable<KestavyysHarjoittelu> uinnit() {
//        Iterable<KestavyysHarjoittelu> kaikki = kr.findAllByLaji("uinti");
//
//        if (kaikki.equals(null)) {
//            throw new RuntimeException("Uintitietojen hakeminen epäonnistui! Palauttaa NULL");
//            // Poikkeuksen käsittely! Mutta missä?
//        }
//        return kaikki;
//    }

    // Hakee kaikki pyöräilyharjoitukset
//    @GetMapping("/pyoraily")
//    public Iterable<KestavyysHarjoittelu> pyorailyt() {
//        Iterable<KestavyysHarjoittelu> kaikki = kr.findAllByLaji("pyöräily");
//
//        if (kaikki.equals(null)) {
//            throw new RuntimeException("Pyöräilytietojen hakeminen epäonnistui! Palauttaa NULL");
//            // Poikkeuksen käsittely!
//        }
//        return kaikki;
//    }

    // Hakee kaikki juoksuharjoitukset
//    @GetMapping("/juoksu")
//    public Iterable<KestavyysHarjoittelu> juoksut() {
//        Iterable<KestavyysHarjoittelu> kaikki = kr.findAllByLaji("juoksu");
//
//        if (kaikki.equals(null)) {
//            throw new RuntimeException("Juoksutietojen hakeminen epäonnistui! Palauttaa NULL");
//            // Poikkeuksen käsittely!
//        }
//        return kaikki;
//    }

    // Hakee yhden kestavyysharjoittelun tiedot id:n perusteella
//    @GetMapping("/kestavyys/{id}")
//    public ResponseEntity<KestavyysHarjoittelu> etsiTiettyHarjoitus(@PathVariable(name="id") int id) {
//        Optional<KestavyysHarjoittelu> optkest = kr.findById(id);
//        if (!optkest.isPresent()) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(optkest.get());
//    }
}