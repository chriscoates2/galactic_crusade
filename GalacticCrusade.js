var battle = true;
var battle2 = true;
var battle3 = true;
var battle4 = true;
var battle5 = true;
var battle6 = true;
var battle7 = true;
var battle8 = true;
var battle9 = true;
var kill = Math.floor(Math.random() * 2);
var yourArmy = 100;
var plutosArmy = 10;
var neptuneArmy = 20;
var uranusArmy = 25;
var saturnArmy = 50;
var jupiterArmy = 100;
var marsArmy = 200;
var earthArmy = 500;
var venusArmy = 1000;
var mercuryArmy = 2000;
var recruitNewSoldiersPluto = Math.ceil(Math.random() * 20);
var recruitNewSoldiersNeptune = Math.ceil(Math.random() * 50);
var recruitNewSoldiersUranus = Math.ceil(Math.random() * 100);
var recruitNewSoldiersSaturn = Math.ceil(Math.random() * 200);
var recruitNewSoldiersJupiter = Math.ceil(Math.random() * 500);
var recruitNewSoldiersMars = Math.ceil(Math.random() * 1000);
var recruitNewSoldiersEarth = Math.ceil(Math.random() * 2000);
var recruitNewSoldiersVenus = Math.ceil(Math.random() * 5000);
var gold = 0;
var PlutoGold = Math.ceil(Math.random() * 100);
var NeptuneGold = Math.ceil(Math.random() * 500);
var UranusGold = Math.ceil(Math.random() * 500);
var SaturnGold = Math.ceil(Math.random() * 1000);
var JupiterGold = Math.ceil(Math.random() * 2000);
var MarsGold = Math.ceil(Math.random() * 5000);
var EarthGold = Math.ceil(Math.random() * 10000);
var VenusGold = Math.ceil(Math.random() * 20000);
var MercuryGold = Math.ceil(Math.random() * 1000000);

function planetInvasion() {
	 alert("Welcome to Galactic Crusade. How far can you go?");
	 // PLUTO
	while(battle) {
		var casualties = Math.floor(Math.random() * 3 + 1);
		var plutoAttack = Math.floor(Math.random() * 3 + 1);
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Pluto has " + plutosArmy + " soldiers left.");
		if(kill) {
			plutosArmy -= plutoAttack;
			console.log("You attacked the Plutonian army and killed " + plutoAttack + " soldiers");
			console.log(" ");
			if (plutosArmy <= 0) {
				console.log("Pluto's army has been wiped out! You have conquered Pluto!");
				battle = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Plutonian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Pluto.");
				battle = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (plutosArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersPluto + " new soldiers and earns you " + PlutoGold + " gold!");
			yourArmy += recruitNewSoldiersPluto;
			console.log("You have " + yourArmy + " soldiers now.");
			gold += PlutoGold;
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade NEPTUNE!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Pluto! You have " + yourArmy + " soldiers and " + gold + " gold. Neptune's army begins with " + neptuneArmy + " soldiers.");
	if (gold >= 50) {
		var power = prompt("Would you like to buy extra attack power for your army for 50 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO'; 
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 50) {
		gold = gold - 50;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 50) {
		var armor = prompt("Would you like to buy armor for your army for 50 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 50) {
		gold = gold - 50;
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 100) {
	var bomb = prompt("Would you like to buy a bomb for 100 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Neptune's army has " + neptuneArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 20);
		neptuneArmy -= bomb;
		gold = gold - 100;
		console.log("The bomb killed " + bomb + " Neptunian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Neptune has " + neptuneArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// NEPTUNE
	while(battle2) {
		var casualties = Math.floor(Math.random() * 5 + 1);
		var neptuneAttack = Math.floor(Math.random() * 3 + 1);
		if (power === 'YES') {
			neptuneAttack = Math.ceil(Math.random() * 5);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 3); 
		} else {
			armor ==='NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Neptune has " + neptuneArmy + " soldiers left.");
		if(kill) {
			neptuneArmy -= neptuneAttack;
			console.log("You attacked the Neptunian army and killed " + neptuneAttack + " soldiers");
			console.log(" ");
			if (neptuneArmy <= 0) {
				console.log("Neptune's army has been wiped out! You have conquered Neptune!");
				battle2 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Neptunian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Neptune.");
				battle2 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (neptuneArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersNeptune + " new soldiers and earns you " + NeptuneGold + " gold!");
			yourArmy += recruitNewSoldiersNeptune;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += NeptuneGold;
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade URANUS!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Neptune! You have " + yourArmy + " soldiers and " + gold + " gold. Uranus's army begins with " + uranusArmy + " soldiers.");
	if (gold >= 100) {
		 power = prompt("Would you like to buy extra attack power for your army for 100 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 100) {
		gold = gold - 100;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 100) {
		 armor = prompt("Would you like to buy armor for your army for 100 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 100) {
		gold = gold - 100;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 100) {
	var bomb = prompt("Would you like to buy a bomb for 100 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Uranus's army has " + uranusArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 25);
		uranusArmy -= bomb;
		gold = gold - 100;
		console.log("The bomb killed " + bomb + " Uranasian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Uranus has " + uranusArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// URANUS
	while(battle3) {
		var casualties = Math.floor(Math.random() * 10 + 1);
		var uranusAttack = Math.floor(Math.random() * 5 + 1);
		if (power === 'YES') {
			uranusAttack = Math.ceil(Math.random() * 10);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 5); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Uranus has " + uranusArmy + " soldiers left.");
		if(kill) {
			uranusArmy -= uranusAttack;
			console.log("You attacked the Uranasian army and killed " + uranusAttack + " soldiers");
			console.log(" ");
			if (uranusArmy <= 0) {
				console.log("Uranus's army has been wiped out! You have conquered Uranus!");
				battle3 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Uranasian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Uranus.");
				battle3 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (uranusArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersUranus + " new soldiers and earns you " + UranusGold + " gold!");
			yourArmy += recruitNewSoldiersUranus;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += UranusGold
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade SATURN!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Uranus! You have " + yourArmy + " soldiers and " + gold + " gold. Saturn's army begins with " + saturnArmy + " soldiers.");
	if (gold >= 200) {
		 power = prompt("Would you like to buy extra attack power for your army for 200 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 200) {
		gold = gold - 200;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 200) {
		 armor = prompt("Would you like to buy armor for your army for 200 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 200) {
		gold = gold - 200;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 200) {
	var bomb = prompt("Would you like to buy a bomb for 200 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Saturns army has " + saturnArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 50);
		saturnArmy -= bomb;
		gold = gold - 200;
		console.log("The bomb killed " + bomb + " Saturnian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Saturn has " + saturnArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// SATURN
	while(battle4) {
		var casualties = Math.floor(Math.random() * 20 + 1);
		var saturnAttack = Math.floor(Math.random() * 10 + 1);
		if (power === 'YES') {
			saturnAttack = Math.ceil(Math.random() * 20);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 10); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Saturn has " + saturnArmy + " soldiers left.");
		if(kill) {
			saturnArmy -= saturnAttack;
			console.log("You attacked the Saturnian army and killed " + saturnAttack + " soldiers");
			console.log(" ");
			if (saturnArmy <= 0) {
				console.log("Saturn's army has been wiped out! You have conquered Saturn!");
				battle4 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Saturnian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Saturn.");
				battle4 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (saturnArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersSaturn + " new soldiers and earns you " + SaturnGold + " gold!");
			yourArmy += recruitNewSoldiersSaturn;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += SaturnGold;
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade JUPITER!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Saturn! You have " + yourArmy + " soldiers and " + gold + " gold. Jupiter's army begins with " + jupiterArmy + " soldiers.");
	if (gold >= 500) {
		 power = prompt("Would you like to buy extra attack power for your army for 500 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 500) {
		gold = gold - 500;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 500) {
		 armor = prompt("Would you like to buy armor for your army for 500 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 500) {
		gold = gold - 500;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 500) {
	var bomb = prompt("Would you like to buy a bomb for 500 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Jupiters army has " + jupiterArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 100);
		jupiterArmy -= bomb;
		gold = gold - 500;
		console.log("The bomb killed " + bomb + " Jupiterian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Jupiter has " + jupiterArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// JUPITER
	while(battle5) {
		var casualties = Math.floor(Math.random() * 50 + 1);
		var jupiterAttack = Math.floor(Math.random() * 25 + 1);
		if (power === 'YES') {
			jupiterAttack = Math.ceil(Math.random() * 50);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 25); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Jupiter has " + jupiterArmy + " soldiers left.");
		if(kill) {
			jupiterArmy -= jupiterAttack;
			console.log("You attacked the Jupiterian army and killed " + jupiterAttack + " soldiers");
			console.log(" ");
			if (jupiterArmy <= 0) {
				console.log("Jupiter's army has been wiped out! You have conquered Jupiter!");
				battle5 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Jupiterian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Jupiter.");
				battle5 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (jupiterArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersJupiter + " new soldiers and earns you " + JupiterGold + " gold!");
			yourArmy += recruitNewSoldiersJupiter;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += JupiterGold
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade MARS!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Jupiter! You have " + yourArmy + " soldiers and " + gold + " gold. Mars's army begins with " + marsArmy + " soldiers.");
	if (gold >= 1000) {
		 power = prompt("Would you like to buy extra attack power for your army for 1000 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 1000) {
		gold = gold - 1000;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 1000) {
		 armor = prompt("Would you like to buy armor for your army for 1000 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 1000) {
		gold = gold - 1000;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 1000) {
	var bomb = prompt("Would you like to buy a bomb for 1000 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("The Martian army has " + marsArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 200);
		marsArmy -= bomb;
		gold = gold - 1000;
		console.log("The bomb killed " + bomb + " Martian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Mars has " + marsArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// MARS
	while(battle6) {
		var casualties = Math.floor(Math.random() * 100 + 1);
		var marsAttack = Math.floor(Math.random() * 50 + 1);
		if (power === 'YES') {
			marsAttack = Math.ceil(Math.random() * 100);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 50); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Mars has " + marsArmy + " soldiers left.");
		if(kill) {
			marsArmy -= marsAttack;
			console.log("You attacked the Martian army and killed " + marsAttack + " soldiers");
			console.log(" ");
			if (marsArmy <= 0) {
				console.log("Mars's army has been wiped out! You have conquered Mars!");
				battle6 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Martian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends on Mars.");
				battle6 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (marsArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersMars + " new soldiers and earns you " + MarsGold + " gold!");
			yourArmy += recruitNewSoldiersMars;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += MarsGold;
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade EARTH!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Mars! You have " + yourArmy + " soldiers and " + gold + " gold. Earth's army begins with " + earthArmy + " soldiers");
	if (gold >= 1000) {
		 power = prompt("Would you like to buy extra attack power for your army for 1000 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 1000) {
		gold = gold - 1000;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 1000) {
		 armor = prompt("Would you like to buy armor for your army for 1000 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 1000) {
		gold = gold - 1000;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		}
	if (gold >= 2000) {
	var bomb = prompt("Would you like to buy a bomb for 2000 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Earth's army has " + earthArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 500);
		earthArmy -= bomb;
		gold = gold - 2000;
		console.log("The bomb killed " + bomb + " Earthling soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("The Earth has " + earthArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// EARTH
	while(battle7) {
		var casualties = Math.floor(Math.random() * 200 + 1);
		var earthAttack = Math.floor(Math.random() * 100 + 1);
		if (power === 'YES') {
			earthAttack = Math.ceil(Math.random() * 200);
		} else {
			power === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 100); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Earth has " + earthArmy + " soldiers left.");
		if(kill) {
			earthArmy -= earthAttack;
			console.log("You attacked the Earthling army and killed " + earthAttack + " soldiers");
			console.log(" ");
			if (earthArmy <= 0) {
				console.log("Earth's army has been wiped out! You have conquered the Earth!");
				battle7 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Earthling army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends on Earth.");
				battle7 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (earthArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersEarth + " new soldiers and earns you " + EarthGold + " gold!");
			yourArmy += recruitNewSoldiersEarth;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += EarthGold
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade VENUS!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Earth! You have " + yourArmy + " soldiers and " + gold + " gold. Venus's army begins with " + venusArmy + " soldiers.");
	if (gold >= 2000) {
		 power = prompt("Would you like to buy extra attack power for your army for 2000 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 2000) {
		gold = gold - 2000;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 2000) {
		 armor = prompt("Would you like to buy armor for your army for 2000 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 2000) {
		gold = gold - 2000;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 5000) {
	var bomb = prompt("Would you like to buy a bomb for 5000 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Venus's army has " + venusArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 1000);
		venusArmy -= bomb;
		gold = gold - 5000;
		console.log("The bomb killed " + bomb + " Venusian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Venus has " + venusArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// VENUS
	while(battle8) {
		var casualties = Math.floor(Math.random() * 500 + 1);
		var venusAttack = Math.floor(Math.random() * 250 + 1);
		if (power === 'YES') {
			venusAttack = Math.ceil(Math.random() * 500);
		} else {
			power = 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 250); 
		} else {
			power = 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Venus has " + venusArmy + " soldiers left.");
		if(kill) {
			venusArmy -= venusAttack;
			console.log("You attacked the Venusian army and killed " + venusAttack + " soldiers");
			console.log(" ");
			if (venusArmy <= 0) {
				console.log("Venus's army has been wiped out! You have conquered Venus!");
				battle8 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Venus army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends in Venus.");
				battle8 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (venusArmy <= 0) {
			console.log("This mission recruits you " + recruitNewSoldiersVenus + " new soldiers and earns you " + VenusGold + " gold!");
			yourArmy += recruitNewSoldiersVenus;
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += VenusGold
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("Prepare to invade MERCURY!");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Venus! You have " + yourArmy + " soldiers and " + gold + " gold. Mercury's army begins with " + mercuryArmy + " soldiers.");
	if (gold >= 5000) {
		 power = prompt("Would you like to buy extra attack power for your army for 5000 gold? (YES or NO)?").toUpperCase();
	} else {
		power === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (power === 'YES' && gold >= 5000) {
		gold = gold - 5000;
			console.log(" ");
			console.log("You bought extra attack power. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				power === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 5000) {
		 armor = prompt("Would you like to buy armor for your army for 5000 gold? (YES or NO)?").toUpperCase();
	} else {
		armor === 'NO';
		kill = Math.floor(Math.random() * 2);
	}
	if (armor === 'YES' && gold >= 5000) {
		gold = gold - 5000;
			console.log(" ");
			console.log("You bought extra attack resistance. You have " + gold + " gold left.");
			console.log(" ");
			} else {
				armor === 'NO';
			kill = Math.floor(Math.random() * 2);	
		} 
	if (gold >= 10000) {
	var bomb = prompt("Would you like to buy a bomb for 10000 gold? (YES or NO)?").toUpperCase();
		}
	if(bomb === 'YES') {
		console.log(" ");
		console.log("You have " + yourArmy + " soldiers.");
		console.log("Mercurys army has " + mercuryArmy + " soldiers.");
		bomb = Math.ceil(Math.random() * 2000);
		mercuryArmy -= bomb;
		gold = gold - 10000;
		console.log("The bomb killed " + bomb + " Mercurian soldiers. You have " + gold + " gold left.");
		console.log(" ");
		console.log("Mercury has " + mercuryArmy + " soldiers left.");
		console.log(" "); 
	} else {
		kill = Math.floor(Math.random() * 2);
	}
	// MERCURY
	while(battle9) {
		var casualties = Math.floor(Math.random() * 1000 + 1);
		var mercuryAttack = Math.floor(Math.random() * 500 + 1);
		if (power === 'YES') {
			mercuryAttack = Math.ceil(Math.random() * 1000);
		} else {
			power = 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		if (armor === 'YES') {
			casualties = Math.ceil(Math.random() * 500); 
		} else {
			armor === 'NO';
			kill = Math.floor(Math.random() * 2);
		}
		console.log("You have " + yourArmy + " soldiers left.");
		console.log("Mercury has " + mercuryArmy + " soldiers left.");
		if(kill) {
			mercuryArmy -= mercuryAttack;
			console.log("You attacked the Mercurian army and killed " + mercuryAttack + " soldiers");
			console.log(" ");
			if (mercuryArmy <= 0) {
				console.log("Mercury's army has been wiped out! You have conquered Mercury!");
				battle9 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		} else {
			yourArmy -= casualties;
			console.log("The Mercurian army attacked and killed " + casualties + " soldiers.");
			console.log(" ");
			if (yourArmy <= 0) {
				console.log("Your soldiers have been wiped out. The crusade ends on Mercury.");
				battle9 = false;
			} else {
				kill = Math.floor(Math.random() * 2);
			}
		}
		if (mercuryArmy <= 0) {
			console.log("You have " + yourArmy + " soldiers now.");
			gold = gold += MercuryGold;
			console.log("You have " + gold + " gold.");
			console.log(" ");
			console.log("You have conquered the galaxy! You also earn " + MercuryGold + " gold to retire off of");
		} else if (yourArmy <= 0) {
			console.log("Game over");
		}
	}
	 alert("You have conquered Mercury! You have " + yourArmy + " soldiers and " + gold + " gold.");
}
planetInvasion();




