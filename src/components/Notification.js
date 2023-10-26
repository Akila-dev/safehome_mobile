import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";

const NotificationComponent = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePress = () => {
    // Replace this with your logic to open the modal
    setModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.transactionContainer}
        //  onPress={handlePress}
      >
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            gap: 10,
            width: "100%",
            
          }}
        >
          <View
            style={{
              backgroundColor: "#8D400010",
              justifyContent: "center",
              alignItems: "center",
              width: 48,
              height: 48,
              borderRadius: 64,
            }}
          >
            <FontAwesome5 name="bullhorn" size={20} color="#8D4000" />
          </View>
          <View
            style={{
              width: "90%",
              paddingRight: 12
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratSemiBold",
                fontSize: 14,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Erat eget integer
              ultricies.
            </Text>
            <Text style={[styles.detailsLeft, { marginTop: 8}]}>
            18 June 2023, 12:56:39
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.transactionContainer}
        //  onPress={handlePress}
      >
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            gap: 10,
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "#8D400010",
              justifyContent: "center",
              alignItems: "center",
              width: 48,
              height: 48,
              borderRadius: 64,
              
            }}
          >
            <FontAwesome5 name="bullhorn" size={20} color="#8D4000" />
          </View>
          <View
            style={{
              width: "90%",
              paddingRight: 12
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratLight",
                fontSize: 14,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Erat eget integer
              ultricies .
            </Text>
            <Text style={[styles.detailsLeft, { marginTop: 8}]}>
           
            18 June 2023, 12:56:39
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "white",
              height: "auto",
              position: "absolute",
              bottom: 0,
              width: "100%",
              paddingBottom: 48,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeModalButton}
            >
              <FontAwesome5 size={24} color="#000000" name="times" />
            </TouchableOpacity>

            <View>
              <Text style={styles.transaction}>NotificationComponent Type</Text>
              <Text style={styles.status}>Withdrawal</Text>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Date</Text>
                <Text style={styles.detailsRight}>18 June 2023, 12:56:39</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Amount</Text>
                <Text style={styles.detailsRight}>₦20,100.00</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Account Name</Text>
                <Text style={styles.detailsRight}>Ibeneme Ikenna</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Status</Text>
                <Text style={styles.detailsRight}>Pending</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Account Number</Text>
                <Text style={styles.detailsRight}>0069416902</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Payment Reference</Text>
                <Text style={styles.detailsRight}>NYELCQDSNRN</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.detailsLeft}>Fee</Text>
                <Text style={styles.detailsRight}>₦35</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  transactionContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeModalButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
    width: "100%",
  },
  closeModalButtonText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  transaction: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Regular",
    marginBottom: 8,
  },
  status: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "MontserratSemiBold",
    marginBottom: 24,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#66666646",
  },

  detailsLeft: {
    fontSize: 13,
    fontFamily: "MontserratLight",
  },
  detailsRight: {
    fontSize: 14,
    fontFamily: "MontserratSemiBold",
  },
});
