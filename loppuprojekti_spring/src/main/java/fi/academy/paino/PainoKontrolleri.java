package fi.academy.paino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;

// by Heidi ja Elina
// RestKontrolleri, jossa metodit painotiedon hakemiseen, poistamiseen, lisäämiseen ja muokkaamiseen

@RestController
public class PainoKontrolleri {

    @Autowired PainoRepo pr;

    // Hakee yhden käyttäjän painotiedot käyttäjäid:n perusteella
    @GetMapping ("/painot/{id}")
    public Iterable<Paino> yhdenKayttajanPainot(@PathVariable(name = "id") String id){
        Iterable<Paino> painot = pr.findAllBykayttajaId(id);

        if (painot.equals(null)) {
            throw new RuntimeException("Painotietojen hakeminen epäonnistui! Palauttaa NULL");
            // Heitetyn poikkeuksen käsittely!
        }
        return painot;
    }

    // Yhden painotiedon poistaminen painoid:n perusteella
    @DeleteMapping("/painot/{id}")
    public ResponseEntity<String> poistaPainoTieto(@PathVariable(name="id") int id) {

        // jos annettua id:tä ei löydy, palautetaan virheilmoitus
        if (!pr.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        // jos annettu id löytyy, sitä vastaava painotieto poistetaan
        pr.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Uuden painotiedon lisääminen tietokantaan (lomake)
    @PostMapping("/painot")
    public ResponseEntity<?> uusiPainoTieto(@RequestBody Paino paino) throws URISyntaxException {

        // Tarkistetaan, että lomakkelta saadulla painotiedolla on tarvittavat arvot
        if (paino.getPvm() == null || paino.getPainoKiloina() == null || paino.getKayttajaId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        pr.save(paino);
        // URI:n rakentaminen:
        URI location = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("localhost")
                .port(8080)
                .path("/painot/{id}")
                .buildAndExpand(paino.getPainoId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}