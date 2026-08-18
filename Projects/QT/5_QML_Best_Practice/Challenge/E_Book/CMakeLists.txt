cmake_minimum_required(VERSION 3.16)

project(E_Book VERSION 0.1 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Quick)

qt_standard_project_setup(REQUIRES 6.10)

qt_add_executable(appE_Book
    main.cpp
)

qt_add_qml_module(appE_Book
    URI E_Book
    QML_FILES
        Main.qml
        QML_FILES Book.qml
        QML_FILES BookPage.qml
        SOURCES Chapter.cpp
        SOURCES Chapter.h
        QML_FILES DarkModeSwitch.qml
        QML_FILES FontSizeSlider.qml
        QML_FILES GreatNightIn.qml
        SOURCES main.cpp
        QML_FILES SettingsButton.qml
        QML_FILES Theme.qml
)

# Qt for iOS sets MACOSX_BUNDLE_GUI_IDENTIFIER automatically since Qt 6.1.
# If you are developing for iOS or macOS you should consider setting an
# explicit, fixed bundle identifier manually though.
set_target_properties(appE_Book PROPERTIES
#    MACOSX_BUNDLE_GUI_IDENTIFIER com.example.appE_Book
    MACOSX_BUNDLE_BUNDLE_VERSION ${PROJECT_VERSION}
    MACOSX_BUNDLE_SHORT_VERSION_STRING ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
)

target_link_libraries(appE_Book
    PRIVATE Qt6::Quick
)

install(TARGETS appE_Book
    BUNDLE DESTINATION .
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
)
