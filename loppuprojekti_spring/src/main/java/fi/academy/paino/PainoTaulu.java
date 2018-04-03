package fi.academy.paino;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

// Ensimmäinen versio (minimitoteutus pv.1) : Luodaan painolle taulu. By Heidi ja Elina

@Entity
public class PainoTaulu {
    @Id @GeneratedValue
    private int painoId;
    private int kayttajaId;
    private LocalDate pvm;
    private int paino;

    public PainoTaulu() {
    }

    public PainoTaulu(int kayttajaId, LocalDate pvm, int paino) {
        this.kayttajaId = kayttajaId;
        this.pvm = pvm;
        this.paino = paino;
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

    public int getPaino() {
        return paino;
    }

    public void setPaino(int paino) {
        this.paino = paino;
    }
}
