
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
    private String kayttajaId;
    private LocalDate pvm; // halutaanko kellonaika?
    private Double painoKiloina;

    public Paino() { }

    public Paino(String kayttajaId, LocalDate pvm, double paino) {
        this.kayttajaId = kayttajaId;
        this.pvm = pvm;
        this.painoKiloina = paino;
    }

    public int getPainoId() {
        return painoId;
    }

    public void setPainoId(int painoId) {
        this.painoId = painoId;
    }

    public String getKayttajaId() {
        return kayttajaId;
    }

    public void setKayttajaId(String kayttajaId) {
        this.kayttajaId = kayttajaId;
    }

    public LocalDate getPvm() {
        return pvm;
    }

    public void setPvm(LocalDate pvm) {
        this.pvm = pvm;
    }

    public Double getPainoKiloina() {
        return painoKiloina;
    }

    public void setPainoKiloina(Double paino) {
        this.painoKiloina = paino;
    }
}