package fi.academy.paino;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

// By Heidi ja Elina
// Tietokannan painotaulua vastaava Entity-luokka

@Entity
public class Paino {
    @Id @NotNull
    @GeneratedValue
    private int painoId;
    @NotNull
    private int kayttajaId;
    // ei ole aivan varmaa vielä, onko LocalDate sopiva formaatti
    private LocalDate pvm;
    private Integer painoKiloina;

    public Paino() { }

    public Paino(int kayttajaId, LocalDate pvm, int paino) {
        this.kayttajaId = kayttajaId;
        this.pvm = pvm;
        this.painoKiloina = paino;
    }

    // Lomakkeelta saadut tiedot päivitetään samalle id:lle
//    public void paivitaTiedot(Paino uusiPaino) {
//        // Ylikirjoitetaan vanha painotieto uudella vain, jos molemmat kentät täytetty
//        if (uusiPaino.painoKiloina != null && uusiPaino.pvm != null) {
//            this.painoKiloina = uusiPaino.painoKiloina;
//            this.pvm = uusiPaino.pvm;
//        }
//    }

    public int getPainoId() {
        return painoId;
    }

    public void setPainoId(int painoId) {
        this.painoId = painoId;
    }

    public int getKayttajaId() {
        return kayttajaId;
    }

    public void setKayttajaId(int kayttajaId) {
        this.kayttajaId = kayttajaId;
    }

    public LocalDate getPvm() {
        return pvm;
    }

    public void setPvm(LocalDate pvm) {
        this.pvm = pvm;
    }

    public Integer getPainoKiloina() {
        return painoKiloina;
    }

    public void setPainoKiloina(Integer paino) {
        this.painoKiloina = paino;
    }
}