class Project {
    private String name;
    private String description;
    //getter for name
    public String getName() {
        return name;
    }
    //setter for name
    public void setName(String name) {
        this.name = name;
    }
    //getter for description
    public String getDescription() {
        return description;
    }
    //setter for description
    public void setDescription(String description) {
        this.description = description;
    }
    //Overloading...
    public Project() {
    }
    public Project(String name) {
        this.name = name;
    }
    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }
}