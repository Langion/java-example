package com.aspirisen.serviceb.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.*;

/*
 * a simple domain entity doubling as a DTO
 */
@Entity
@Table(name = "hotel")
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class HotelTwo {
	public Hotel one; 
}
