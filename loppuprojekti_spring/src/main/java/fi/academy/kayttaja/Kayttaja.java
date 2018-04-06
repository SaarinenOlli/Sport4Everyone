package fi.academy.kayttaja;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Kayttaja {

    @NotNull @Id
    private String id;
    private int painoKirjauksia;
    private int juoksuKerrat;
    private int uintiKerrat;
    private int pyorailyKerrat;

    public Kayttaja() {}

    public Kayttaja(@NotNull String id, int painoKirjauksia, int juoksuKerrat, int uintiKerrat, int pyorailyKerrat) {
        this.id = id;
        this.painoKirjauksia = painoKirjauksia;
        this.juoksuKerrat = juoksuKerrat;
        this.uintiKerrat = uintiKerrat;
        this.pyorailyKerrat = pyorailyKerrat;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getPainoKirjauksia() {
        return painoKirjauksia;
    }

    public void setPainoKirjauksia(int painoKirjauksia) {
        this.painoKirjauksia = painoKirjauksia;
    }

    public int getJuoksuKerrat() {
        return juoksuKerrat;
    }

    public void setJuoksuKerrat(int juoksuKerrat) {
        this.juoksuKerrat = juoksuKerrat;
    }

    public int getUintiKerrat() {
        return uintiKerrat;
    }

    public void setUintiKerrat(int uintiKerrat) {
        this.uintiKerrat = uintiKerrat;
    }

    public int getPyorailyKerrat() {
        return pyorailyKerrat;
    }

    public void setPyorailyKerrat(int pyorailyKerrat) {
        this.pyorailyKerrat = pyorailyKerrat;
    }
}
