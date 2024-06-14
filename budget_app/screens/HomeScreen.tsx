import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Category, Transaction } from "../types";
import { useSQLiteContext } from "expo-sqlite/next";
import { TransactionList } from "../components";

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  const db = useSQLiteContext();

  const getData = async () => {
    const result = await db.getAllAsync(`SELECT * FROM Transactions`);
    setTransaction(result);
  };

  const deleteTransaction = async (id: number) => {
    db.withTransactionAsync(async () => {
      await db.runAsync(`DELETE FROM Transactions WHERE id = ?`, [id]);
      await getData()
    });
  };

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TransactionList
        deleteTransaction={deleteTransaction}
        categories={categories}
        transactions={transaction}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
