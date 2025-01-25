package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class employee {
	
	@Id
	private int eid;
	private String ename;
	private int salary;
	private long mono;
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public long getMono() {
		return mono;
	}
	public void setMono(long mono) {
		this.mono = mono;
	}
	@Override
	public String toString() {
		return "employee [eid=" + eid + ", ename=" + ename + ", salary=" + salary + ", mono=" + mono + "]";
	}
	

}
