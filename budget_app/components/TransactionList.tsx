import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Category, Transaction } from '../types'

const TransactionList = ({
  transactions,
  categories,
  deleteTransaction
}:{
  categories:Category[]
  transactions:Transaction[]
  deleteTransaction:(id:number) => Promise<void>
}) => {
  return (
    <View style={{gap:15}} >
      {transactions?.map((transaction) => (
        <TouchableOpacity key={transaction.id} activeOpacity={0.7} onLongPress={() => deleteTransaction(transaction.id)} >
          <Text>{transaction.amount}</Text>
          <Text>{transaction.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TransactionList