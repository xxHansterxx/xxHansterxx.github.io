cmake_minimum_required(VERSION 3.16)

project(Weather_App VERSION 0.1 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Quick)

qt_standard_project_setup(REQUIRES 6.10)

qt_add_executable(appWeather_App
    main.cpp
)

qt_add_qml_module(appWeather_App
    URI Weather_App
    QML_FILES
        Main.qml
        RESOURCES assets/icons/icon0.svg assets/icons/icon1.svg assets/icons/icon2.svg assets/icons/icon3.svg assets/icons/icon45.svg assets/icons/icon48.svg assets/icons/icon51.svg assets/icons/icon53.svg assets/icons/icon55.svg assets/icons/icon56.svg assets/icons/icon57.svg assets/icons/icon61.svg assets/icons/icon63.svg assets/icons/icon65.svg assets/icons/icon66.svg assets/icons/icon67.svg assets/icons/icon71.svg assets/icons/icon73.svg assets/icons/icon75.svg assets/icons/icon77.svg assets/icons/icon80.svg assets/icons/icon81.svg assets/icons/icon82.svg assets/icons/icon85.svg assets/icons/icon86.svg assets/icons/icon95.svg assets/icons/icon96.svg assets/icons/icon99.svg assets/images/attributions.md assets/images/image0.jpg assets/images/image1.jpg assets/images/image2.jpg assets/images/image3.jpg assets/images/image45.jpg assets/images/image48.jpg assets/images/image51.jpg assets/images/image53.jpg assets/images/image55.jpg assets/images/image56.jpg assets/images/image57.jpg assets/images/image61.jpg assets/images/image63.jpg assets/images/image65.jpg assets/images/image66.jpg assets/images/image67.jpg assets/images/image71.jpg assets/images/image73.jpg assets/images/image75.jpg assets/images/image77.jpg assets/images/image80.jpg assets/images/image81.jpg assets/images/image82.jpg assets/images/image85.jpg assets/images/image86.jpg assets/images/image95.jpg assets/images/image96.jpg assets/images/image99.jpg
)

# Qt for iOS sets MACOSX_BUNDLE_GUI_IDENTIFIER automatically since Qt 6.1.
# If you are developing for iOS or macOS you should consider setting an
# explicit, fixed bundle identifier manually though.
set_target_properties(appWeather_App PROPERTIES
#    MACOSX_BUNDLE_GUI_IDENTIFIER com.example.appWeather_App
    MACOSX_BUNDLE_BUNDLE_VERSION ${PROJECT_VERSION}
    MACOSX_BUNDLE_SHORT_VERSION_STRING ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
)

target_link_libraries(appWeather_App
    PRIVATE Qt6::Quick
)

install(TARGETS appWeather_App
    BUNDLE DESTINATION .
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
)
