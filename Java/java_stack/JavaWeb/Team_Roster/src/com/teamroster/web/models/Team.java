package com.teamroster.web.models;

public class Team {
	private String team_name;
	private String players;
	public Team(String team_name) {
		this.team_name = team_name;
	}
	public String getTeam_name() {
		return team_name;
	}
	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}
	public String getPlayers() {
		return players;
	}
	public void setPlayers(String players) {
		this.players = players;
	} 
}
