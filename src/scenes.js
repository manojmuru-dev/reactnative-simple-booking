'use strict';
import React, { Component } from 'react';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import { APP_STYLES } from './utils/AppStyles';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Categories from './containers/Category/Categories';
import Test from './containers/Category/Test';
import Category from './containers/Category/Category';
import Company from './containers/Company/Company';
import Appointment from './containers/Appointment/Appointment';
import Map from './containers/Company/Map';
import Settings from './containers/Settings/Settings';
import Favorites from './containers/User/Favorites';
import Appointments from './containers/User/Appointments';
import Search from './containers/Company/Search';
import Service from './containers/Service/Service';
import TabIcon from './components/TabIcon';
import LoginDialog from './components/LoginDialog';
import NavigationDrawer from './components/NavigationDrawer';
import IntroCarousel from './components/IntroCarousel';
import About from './components/About';
import Term from './components/Term';
import Profile from './containers/User/Profile';

export const scenes = Actions.create(
  <Scene key="root" component={Modal} >
    <Scene key="tabbar" component={NavigationDrawer} >

      <Scene key="home" tabs={true} default="introCarousel"
             tabBarStyle={{
              backgroundColor:APP_STYLES.primaryColor ,
              height:40
             }}
             navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
      >
        <Scene key="main"
               icon={TabIcon}
               selectedTabIcon="ion|ios-home"
               tabIcon="ion|ios-home-outline"
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
        >
          <Scene key="categories" component={Categories} initial={true} hideNavBar={false} />
          <Scene key="categoryEntity" component={Category} />
          <Scene key="companyEntity" component={Company} />
          <Scene key="appointmentContainer" component={Appointment} />
        </Scene>

        <Scene key="maps" component={Map} icon={TabIcon}
               selectedTabIcon="ion|ios-location" tabIcon="ion|ios-location-outline"
               hideNavBar={true}
        />

        <Scene key="favorites" component={Favorites} icon={TabIcon} title="Favorites"
               selectedTabIcon="ion|android-favorite" tabIcon="ion|android-favorite-outline"
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
               hideNavBar={true}
        />

        <Scene key="appointments" component={Appointments}  icon={TabIcon} title="Appointments"
               selectedTabIcon="ion|ios-alarm" tabIcon="ion|ios-alarm-outline"
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
               hideNavBar={true}

        />
        <Scene key="settings" icon={TabIcon}  title="Settings"
               selectedTabIcon="ion|ios-gear" tabIcon="ion|ios-gear-outline"
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
        >
          <Scene key="settingsScene" component={Settings} />
          <Scene key="about" component={About}  hideTabBar={true} hideNavBar={true}/>
          <Scene key="term" component={Term}  hideTabBar={true} hideNavBar={true}/>
          <Scene key="profile" component={Profile}  hideTabBar={true} hideNavBar={true}/>
        </Scene>

        <Scene key="serviceTab"
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
        >
          <Scene key="serviceEntity" component={Service} title="Service" type="reset"/>
        </Scene>

        <Scene key="search" component={Search} title="search" hideNavBar={false}
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
               titleStyle={{ color:'white' }}
        />

        <Scene key="login" component={Login} hideNavBar={true} />
        <Scene key="register" component={Register} hideNavBar={true} />
        <Scene key="loginDialog" component={LoginDialog} hideNavBar={true} />
        <Scene initial={true} key="introCarousel" component={IntroCarousel}  hideTabBar={true} hideNavBar={true}/>
      </Scene>
    </Scene>

  </Scene>
);
