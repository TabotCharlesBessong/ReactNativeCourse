import { View, Text } from 'react-native'
import React from 'react'
import {Transaction,Category} from "../types"

interface TransactionListItemProps {
  transaction:Transaction
  categoryInfo:Category | undefined
}

const TransactionListItem = ({transaction,categoryInfo}:TransactionListItemProps) => {
  return (
    <View>
      <Text>TransactionListItem</Text>
    </View>
  )
}

export default TransactionListItem