class ProjectTest {
    public static void main(String[] args) {
        Project Leo = new Project();
        Project Brian = new Project();
        Leo.setName("Codename Lion");
        Leo.setDescription("Develop a video game base on the best RPG");
        String LeoName = Leo.getName();
        String LeoDescription = Leo.getDescription();
        Brian.setName("Codename Squid");
        Brian.setDescription("Develop a video game base on awesome Strategy");
        String BrianName = Brian.getName();
        String BrianDescription = Brian.getDescription();
        System.out.println("Project Name: " + LeoName + ", Descrpition: " + LeoDescription);
        System.out.println("Project Name: " + BrianName + ", Descrpition: " + BrianDescription);
        Project NewProject = new Project("Codename Dragon");
        String name = NewProject.getName();
        System.out.println("The New Project is: " + name);
        Project ShinnyProject = new Project("Codename Phonix","Develop a video game base on this good Character");
        String name2 = ShinnyProject.getName();
        String description = ShinnyProject.getDescription();
        System.out.println("The Project name is: " + name2 +" Description: " + description);
    }
}