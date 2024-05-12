import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Entypo,FontAwesome6,AntDesign} from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SortModal from './SortModal';



const STATUSBAR_HEIGHT = StatusBar.currentHeight
const MainContainer = ({children,header=true,title,navigation,route,bottom_sheet_visible=true}) => {
  return (
    <BottomSheetModalProvider>
    <View style={styles.root}>
        {header?(
            <View style={styles.header}>
            <Pressable onPress={()=>navigation.goBack()} style={styles.button}>
              <Entypo name="chevron-thin-left" size={FONTSIZE.title} color={COLORS.accent2} />
            </Pressable>
            <Text style={styles.header_title}>{title}</Text>
    
          </View>
        ):null}
      {children}
    </View>
    </BottomSheetModalProvider>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    root: {
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: COLORS.light1,
        flex:1
      },
      header_title: {
        fontSize: FONTSIZE.title,
        fontWeight: FONTWEIGHT.medium,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.lg,
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.lg,
      },
      button: {
        backgroundColor: COLORS.accent1,
        padding: SPACING.md,
        borderRadius: SPACING.sm,
        alignItems: 'center',
        justifyContent: 'center',
        height:48,width:48
      },
})