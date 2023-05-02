package es.mycloset.front;

public class User {

    private String username;
    private String password;
    private static User currentUser;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        currentUser = this;
    }

    public static User getCurrentUser(){
        return currentUser;
    }
    public static void setCurrentUser(User user){
        currentUser = user;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

