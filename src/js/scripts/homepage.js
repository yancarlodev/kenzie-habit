import Header from "../controllers/Header.controller.js";
import Main from "../controllers/Main.controller.js";

import createHabit from "../controllers/createHabit.controller.js"
import MainView from "../views/Main.view.js"
import Api from "../models/Api.model.js";

Header.buttonCard()
Header.editProfile()
Header.logout()

Header.getInputsEditProfile();

Main.clickButttonCreate()
Main.showAllComplets()
Main.showAll()
createHabit.controllerHabit()

MainView.renderAllHabits(Api.habitReadAll())
Main.clickCheckbox()
Main.clickButtonEdit()
MainView.checkIfItsComplete()
