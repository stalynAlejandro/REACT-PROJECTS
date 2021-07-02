import styles from './ProfileScreen.style'
import { FirstRoute, SecondRoute } from './ProfileScreen.UI'
import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { Icon } from 'react-native-elements'
import { Grid, Row } from 'react-native-easy-grid'
import { useSelector } from 'react-redux'
import { IUser } from '../../constants/Types'
import { COLORS } from '../../constants/Colors'
import { Profile } from '../../components/Profile'
import { ButtonFollow } from '../../components/ButtonFollow'
import { ButtonUnfollow } from '../../components/ButtonUnfollow'

function ProfileScreen({ route, navigation }: { route: any, navigation: any }): JSX.Element {

  const userLoggedIn = useSelector((state: any) => state.firebase.profile) as IUser
  const usersList = useSelector((state: any) => (state.firestore.ordered.users))
  const foreignUser = route.params?.user !== undefined ? usersList?.filter((user: any ) => user?.Email === route.params?.user)[0] : null
  const isMyProfile = foreignUser === null || userLoggedIn.Email === foreignUser?.Email
  const showUser = isMyProfile ? userLoggedIn : foreignUser
  const userRecipes = showUser?.RecipesCreated

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'recipes' },
    { key: 'videos' },
  ]);

  const userVideos = [
    {
      title: 'Cocinamos las mejores hamburguesas',
      image: require('../../assets/images/ChicoteCuiner.jpeg'),
      description: 'La receta especial de esta semana son unas hamburgues...',
      date: '20/03/2021',
      hour: '18:30',
      transmitted: false,
    },
    {
      title: 'Cocinamos arroz como en Valencia',
      image: require('../../assets/images/ChicoteRojo.jpeg'),
      description: 'Hoy compartiré con vosotros la mejor receta de arroz para principiantes, no os lo perdais!!!',
      date: '20/01/2021',
      hour: '19:00',
      transmitted: true,
    },
    {
      title: 'Cocinamos arroz como en Valencia',
      image: require('../../assets/images/ChicoteRojo.jpeg'),
      description: 'Hoy compartiré con vosotros la mejor receta de arroz para principiantes, no os lo perdais!!!',
      date: '20/01/2021',
      hour: '19:00',
      transmitted: true,
    },
    {
      title: 'Cocinamos arroz como en Valencia',
      image: require('../../assets/images/ChicoteRojo.jpeg'),
      description: 'Hoy compartiré con vosotros la mejor receta de arroz para principiantes, no os lo perdais!!!',
      date: '20/01/2021',
      hour: '19:00',
      transmitted: true,
    }
  ]

  const _renderScene = SceneMap({
    recipes: () => <ScrollView><FirstRoute recipes={userRecipes} /></ScrollView>,
    videos: () => <ScrollView><SecondRoute videos={userVideos} isMyProfile={isMyProfile} /></ScrollView>,
  });

  const getTabBarIcon = ({ props }: { props: any }) => {
    const { route } = props

    if (route.key === 'recipes') {
      return <Icon type={'ionicon'} name={'restaurant-outline'} color={'#C4C4C4'} />
    } else {
      return <Icon type={'ionicon'} name={'tv-outline'} color={'#C4C4C4'} />
    }
  }

  const renderTabBar = (props: any) => (
    <TabBar {...props}
      style={{ backgroundColor: 'white' }}
      renderIcon={
        props => getTabBarIcon({ props })
      }
    />
  );

  return (
    <Grid style={{ backgroundColor: COLORS.white }}>
      
      <Row style={styles.container}>
        {!(foreignUser === null) &&
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon type={'ionicon'} size={40} name={'return-up-back-outline'} color={'#000000'} />
          </TouchableOpacity>  
        }

        {(isMyProfile) && (
          <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.openDrawer()}>
            <Icon type={'ionicon'} name={'settings-outline'} size={35} color={COLORS.dark_gray} />
          </TouchableOpacity>)
        }

        <Profile
          picture={showUser?.ProfileImageUrl}
          name={showUser?.Name}
          about={showUser?.About}
          follows={showUser?.Follows?.length}
          followers={showUser?.Followers?.length}
        />
      </Row>

      { (!isMyProfile) && (
        <View style={styles.buttons} >
          { 
            (userLoggedIn.Follows?.includes(foreignUser?.Email)) ? 
            <ButtonUnfollow user={userLoggedIn} userToUnfollow={foreignUser}/> : 
            <ButtonFollow user={userLoggedIn} userToFollow={foreignUser}/>
          }
        </View>)
      }

      <Row size={64}>
        <TabView
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          renderScene={_renderScene}
        />
      </Row>
    </Grid>
  )
}

export { ProfileScreen }