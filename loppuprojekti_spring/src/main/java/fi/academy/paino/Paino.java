package fi.academy.paino;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

// By Heidi ja Elina
// Ensimmäinen versio (minimitoteutus pv.1) : Luodaan painolle taulu

@Entity
public class Paino {
    @Id @GeneratedValue
    private int painoId;
    private int kayttajaId;
    private LocalDate pvm;
    private Integer painoKiloina;

    public Paino() {
    }

    public Paino(int kayttajaId, LocalDate pvm, int paino) {
        this.kayttajaId = kayttajaId;
        this.pvm = pvm;
        this.painoKiloina = paino;
    }

    public void paivitaTiedot(Paino uusiPaino) {
        if (uusiPaino.painoKiloina != null) {
            this.painoKiloina = uusiPaino.painoKiloina;
        }
        if (uusiPaino.pvm != null) {
            this.pvm = uusiPaino.pvm;
        }
    }

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

    public int getPainoKiloina() {
        return painoKiloina;
    }

    public void setPainoKiloina(int paino) {
        this.painoKiloina = paino;
    }
}