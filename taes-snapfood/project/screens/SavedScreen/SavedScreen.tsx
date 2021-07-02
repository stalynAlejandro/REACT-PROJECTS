import styles from "./SavedScreen.style"
import React, { useState } from "react"
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native"
import { Grid, Row } from "react-native-easy-grid"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { IRecipeState } from "../../store/reducers/recipeReducer"
import { clearFolderSuccess, clearRecipeError } from "../../store/actions/recipeActions";
import { IFolder, IRecipe, IUser } from "../../constants/Types"
import { Dialog, NewFolder } from "../../components"
import { COLORS } from "../../constants/Colors"

const FolderCover = (recipes: IRecipe[]) => {
  if(recipes === undefined) return;
  if (recipes.length === 0) {
    return require("../../assets/images/fondoImagen.png");
  } else {
    return { uri: recipes[0].ImageURL };
  }
};

interface ILikedFolder {
  recipesLiked: IRecipe[];
}

const LikedFolder = (args: ILikedFolder) => {
  const navigation = useNavigation();
  const FolderMG: IFolder = { Title: "Recetas Likeadas", Recipes: args.recipesLiked };
  return (
    <View style={styles.folderContainer}>
      <TouchableOpacity onPress={() => { navigation.navigate({
        name: "SavedFolder",
        params: {
          folder: FolderMG,
          editOptions: false,
        }
      })}} >
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.categoryImage}
          source={FolderCover(args.recipesLiked)} >
          <Icon type={"ionicon"} name={"heart-outline"} size={70} color={"white"} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

interface ICategoryComponent {
  folder: IFolder;
}

const CategoryComponent = (args: ICategoryComponent) => {
  const navigation = useNavigation();
  return (
    <View style={styles.folderContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate({
          name: "SavedFolder",
          params: {
            folder: args.folder,
            editOptions: true,
          },
        })}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.categoryImage}
          source={FolderCover(args.folder.Recipes)} >
          <Text style={styles.elementTitle}>{args.folder.Title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

interface IFolderComponent {
  author: IUser;
}

const FolderComponent = (args: IFolderComponent) => {
  return (
    <ScrollView>
        <View style={styles.folder}>
          <LikedFolder recipesLiked={args.author.RecipesLiked} />
          {args.author.Folders && args.author.Folders.sort((a, b) =>
            a.Title > b.Title ? 1 : -1 ).map((folder: IFolder, i: number) => {
              return (
                <View key={i}>
                  <CategoryComponent folder={folder}></CategoryComponent>
                </View>
              );
            })}
        </View>
    </ScrollView>
  );
};

interface ILessonComponent {
  title: string;
  image: any;
}

const LessonComponent = (args: ILessonComponent) => {
  return (
    <View style={styles.lessons}>
      <View style={styles.lineStyle} />
      <ImageBackground style={styles.lessonImage} source={args.image}>
        <ImageBackground style={styles.lessonImage} source={require("../../assets/images/fondoImagen.png")} >
          <Text style={styles.lessonTitle}>{args.title}</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

function SavedScreen() {
  const titleFolder = "Tus recetas";
  const titleLesson = "Tus Clases";
  const lesson = require("../../assets/images/tusClases.jpg");
  const [modalVisible, setModalVisible] = useState(false);
  const userProfileState = useSelector((state: any) => state.firebase.profile);
  const recipeState = useSelector((state: any) => state.recipe) as IRecipeState;
  const dispatch = useDispatch();

  return (
    <Grid>
      <NewFolder visible={modalVisible} setVisible={() => setModalVisible(false)} />

      <Row style={styles.rowTitle}>
        <Text style={styles.titleFolder}>{titleFolder}</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={() => { setModalVisible(true); }}>
          <Icon type={"ionicon"} size={50} name={"add-outline"} color={COLORS.dark_gray} />
        </TouchableOpacity>
      </Row>

      <Row size={6}>
        <FolderComponent author={userProfileState} />
      </Row>

      <Row style={styles.rowLesson}>
        <LessonComponent title={titleLesson} image={lesson} />
      </Row>

      {recipeState.recipeError &&
        <Dialog message={recipeState.recipeError}
          buttonTitle="Aceptar"
          pressButton={() => dispatch(clearRecipeError())}/>
      }
      {recipeState.isCreateFolderSuccessful &&
        <Dialog message={"La carpeta se ha creado correctamente"}
          buttonTitle="Aceptar"
          pressButton={() => dispatch(clearFolderSuccess())}/>
      }
    </Grid>
  );
}

export { SavedScreen };
