package data.DTO;

public class UserTest {
    // Kan tilføje flere atributter hvis nødvendigt
    private int id;

    private String name;

    public UserTest(int id, String name){
        this.name=name;
        this.id=id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
