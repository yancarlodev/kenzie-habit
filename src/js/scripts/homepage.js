import Header from "../controllers/Header.controller.js";
import Main from "../controllers/Main.controller.js";
import createHabit from "../controllers/createHabit.controller.js"
import MainView from "../views/Main.view.js"
import Api from "../models/Api.model.js";

Header.changeUserImgAndName(Api.user);
Header.buttonCard()
Header.editProfile()
Header.logout()
Header.getInputsEditProfile();


Main.clickButttonCreate()
createHabit.controllerHabit()

MainView.renderAllHabits(Api.habitReadAll())
Main.clickCheckbox()
Main.clickButtonEdit()
MainView.checkIfItsComplete()


