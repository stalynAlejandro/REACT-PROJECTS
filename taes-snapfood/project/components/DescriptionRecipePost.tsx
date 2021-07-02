import { NewFolder } from "./NewFolderModal";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import CheckBox from "@react-native-community/checkbox";
import { useSelector, useDispatch } from "react-redux";
import { addToFavs, removeFromFavs, addToFolder, removeFromFolder } from "../store/actions/recipeActions";
import { IFolder, IRecipe, IUser } from "../constants/Types";
import { COLORS } from "../constants/Colors";

interface IDescriptionRecipePost {
  description: string
  recipe: IRecipe
}

const DescriptionRecipePost = ({ description, recipe } : IDescriptionRecipePost) => {
  const dispatch = useDispatch();
  const userProfileState = useSelector((state: any) => state.firebase.profile) as IUser;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNewVisible, setModalNewVisible] = useState(false);
    
  const [userFolders, setUserFolders] = useState<any[]>(
    userProfileState.Folders ? userProfileState.Folders : []
  );

  const [userRecipesLiked, setUserRecipesLiked] = useState<IRecipe[]>(
    userProfileState.RecipesLiked ? userProfileState.RecipesLiked : []
  );

  const pressLiked = () => {
    dispatch(addToFavs(recipe, userProfileState));
  };

  const removeLiked = () => {
    dispatch(removeFromFavs(recipe, userProfileState));
  };

  const onCheckBoxValueUpdate = ( value: boolean, item: IFolder, recipe: IRecipe ) => {
    value ? dispatch(addToFolder(recipe, userProfileState, item)) : dispatch(removeFromFolder(recipe, userProfileState, item))
  }

  const isRecipeInsideFolder = (folder: IFolder, recipe: IRecipe): boolean => {
    return userFolders?.some((fol: IFolder) =>
      fol.Title === folder.Title && fol.Recipes.some((re: IRecipe) => re.Name === recipe.Name)
    );
  };

  const isRecipeInsideRecipesLiked = (recipe: IRecipe): boolean => {
    return userRecipesLiked?.some((recip: IRecipe) => recip.Name === recipe.Name)
  };

  const isRecipeSavedSomewhere = (recipe: IRecipe): boolean => {
    return userFolders?.some((fol: IFolder) =>
      fol.Recipes.some((re: IRecipe) => re.Name === recipe.Name)
    );
  };

  useEffect(() => {
    setUserFolders(userProfileState.Folders);
    setUserRecipesLiked(userProfileState.RecipesLiked)
  }, [userProfileState]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible), setModalNewVisible(false); }}>

        <View style={styles.modalPosition}>
          <View style={styles.modalView}>

            <View style={styles.modalContents}>
              <Text style={styles.modalText}>Guardar en... </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon type={'ionicon'} size={25} name={'close-outline'} color={'#000000'} />
              </TouchableOpacity>
            </View>

            <View style={styles.foldersSpace}>
              {userProfileState.Folders === undefined || userProfileState.Folders.length === 0 ? 
                ( <Text>No tienes carpetas</Text> ) :
                ( userProfileState.Folders.sort((a, b) => (a.Title > b.Title) ? 1 : -1).map((folder: IFolder, i: number) => {
                  return (
                    <View key={i} style={styles.folders}>
                      <CheckBox 
                        onValueChange={(value: boolean) => onCheckBoxValueUpdate(value, folder, recipe)}
                        value={isRecipeInsideFolder(folder, recipe)}
                        disabled={false} />
                      <Text style={styles.foldersName}>{folder.Title}</Text>
                    </View>
                  );
                }))
              }
            </View>

            <View>
              <TouchableOpacity style={styles.newFolder} 
                onPress={() => { setModalNewVisible(true), setModalVisible(false); }} >
                <Icon type={'ionicon'} size={25} name={'add-outline'} color={'#000000'} />
                <Text style={styles.modalText}> Crear Carpeta</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
      
      <NewFolder visible={modalNewVisible} setVisible={() => setModalNewVisible(false)} />
      <Text style={styles.description}>{description}</Text>
      
      <View style={styles.postSaveRecipe}>
        <TouchableOpacity onPress={() => { !isRecipeInsideRecipesLiked(recipe)? [ pressLiked()] : [ removeLiked()] }} >
          <Icon
            type={'ionicon'}
            name={ isRecipeInsideRecipesLiked(recipe) ? 'heart' : 'heart-outline'}
            size={35}
            color={ isRecipeInsideRecipesLiked(recipe) ? COLORS.orange : COLORS.dark_gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon
            type={'ionicon'}
            name={ isRecipeSavedSomewhere(recipe) ? 'bookmark' : 'bookmark-outline' }
            size={30}
            color={ isRecipeSavedSomewhere(recipe) ? COLORS.orange : COLORS.dark_gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalPosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    elevation: 5
  },
  modalContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  modalText: {
    fontWeight: 'bold'
  },
  foldersSpace: {
    marginTop: 10,
    marginBottom: 10
  },
  folders: {
    flexDirection: 'row'
  },
  foldersName: {
    textAlignVertical: 'center'
  },
  newFolder: {
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1
  },
  description: {
    alignSelf: 'center',
    fontFamily: 'Roboto_400Regular',
    fontSize: 17
  },
  postSaveRecipe: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }  
});

export { DescriptionRecipePost };