cmake_minimum_required(VERSION 3.16)

project(Chat_Application VERSION 0.1 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Quick)

qt_standard_project_setup(REQUIRES 6.10)

qt_add_executable(appChat_Application
    main.cpp
)

qt_add_qml_module(appChat_Application
    URI Chat_Application
    QML_FILES
        Main.qml
        RESOURCES assets/paperclip-solid.png
        RESOURCES assets/paper-plane-regular.png assets/paperclip-solid.png
)

# Qt for iOS sets MACOSX_BUNDLE_GUI_IDENTIFIER automatically since Qt 6.1.
# If you are developing for iOS or macOS you should consider setting an
# explicit, fixed bundle identifier manually though.
set_target_properties(appChat_Application PROPERTIES
#    MACOSX_BUNDLE_GUI_IDENTIFIER com.example.appChat_Application
    MACOSX_BUNDLE_BUNDLE_VERSION ${PROJECT_VERSION}
    MACOSX_BUNDLE_SHORT_VERSION_STRING ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
)

target_link_libraries(appChat_Application
    PRIVATE Qt6::Quick
)

install(TARGETS appChat_Application
    BUNDLE DESTINATION .
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
)
