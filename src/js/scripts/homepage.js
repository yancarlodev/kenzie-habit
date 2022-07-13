import Header from "../controllers/Header.controller.js";
import Main from "../controllers/Main.controller.js";

import createHabit from "../controllers/createHabit.controller.js"
import MainView from "../views/Main.view.js"


Header.buttonCard()
Header.editProfile()
Header.logout()
Header.saveAlterationModal()

Main.clickButttonCreate()
createHabit.controllerHabit()

// MainView.renderAllHabits()
Main.clickCheckbox()
Main.clickButtonEdit()
MainView.checkIfItsComplete()