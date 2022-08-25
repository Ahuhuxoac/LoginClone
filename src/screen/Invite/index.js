import React, { useCallback } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";

const Invite = () => {
  const Items = useSelector((state) => {
    return state.cart.CartList;
  });

  const priceItems = (total,i) => {
      const price = total + Items[i].price * Items[i].quantity
      return price
  }
  const totalcheck = () => {
      let totalPrice = 0;
      for(let i=0;i<Items.length;i++){
          if (Items[i].ischeck === true) {
              totalPrice = priceItems(totalPrice,i)
          }
      }
      return totalPrice.toFixed(2); 
  }


  return(
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>Cart</Text>
            <FlatList 
            data={Items}
            renderItem={({item}) => <CartProduct cartItem={item} />}
            showsVerticalScrollIndicator={false}
            />
            <Text>Total : {totalcheck()}</Text>
        </View>
      </View>
  );

  }
  const styles = StyleSheet.create({
  root:{
    width: '100%',
    height: '100%',
  },
  container: {
      marginTop: 30,
  },
  title: {
      textAlign: 'center'
  }
  })

export default Invite;
