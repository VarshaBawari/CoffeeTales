import React, { Component } from 'react';

import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, FlatList, WebView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shouldShowDetailedView } from '../redux/dispatcher'
import { ScrollView } from 'react-native-gesture-handler';
import { AirbnbRating } from 'react-native-ratings';
import Modal from "react-native-modal";
import { buildUrl } from '../../../../../utils/urlHelper'
import ProgressiveImage from '../../../../../components/progressiveImage'

class DetailedView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var uri = ""
        if (this.props.data && this.props.data.photos && this.props.data.photos.length > 0) {
            uri = buildUrl("https://maps.googleapis.com/maps/api/place/photo", {
                photoreference: this.props.data.photos[0].photo_reference,
                maxwidth: 400,
                key: "AIzaSyB3_Mmv6rtaEs_p6-UCc9Dr2g1F907hmQ0",
            })

        }

        return (
            <View style={{ flex: 1, backgroundColor: "white", alignItems: "flex-end" }}>
                <Modal isVisible={this.props.isVisible}>
                    <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>

                        <ScrollView>

                            <ProgressiveImage style={{ width: "100%", height: 250, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}
                                uri={uri}
                            />
                            <View style={{ marginRight: 15, marginLeft: 15, marginTop: 15 }}>
                                {
                                    this.props.data.name &&
                                    <Text
                                        style={{ fontWeight: "bold", fontSize: 16, color: "#335569", paddingTop: 10 }}>
                                        {this.props.data.name}
                                    </Text>
                                }
                                {
                                    this.props.data.rating &&
                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, }}>
                                        <Text style={{ fontSize: 14, color: "black", marginRight: 5 }}>
                                            {this.props.data.rating}
                                        </Text>
                                        <AirbnbRating
                                            starContainerStyle={{
                                                alignSelf: "flex-start",
                                                backgroundColor: "transparent",
                                                marginRight: 5
                                            }}
                                            size={15}
                                            isDisabled={true}
                                            showRating={false}
                                            defaultRating={this.props.data.rating}
                                        />
                                        {
                                            this.props.data.user_ratings_total &&
                                            <Text style={{ fontSize: 12, color: "black" }}>
                                                {"(" + this.props.data.user_ratings_total + ")"}
                                            </Text>
                                        }
                                    </View>

                                }

                                {
                                    this.props.data.vicinity &&
                                    <Text style={{ fontSize: 12, color: "black", paddingTop: 5 }} numberOfLines={1}>
                                        {this.props.data.vicinity}
                                    </Text>
                                }

                                {
                                    this.props.data.opening_hours &&
                                    <Text style={{ fontSize: 10, color: this.props.data.opening_hours.open_now ? "green" : "gray", paddingTop: 5 }}>
                                        {this.props.data.opening_hours.open_now ? "OPEN NOW" : "CLOSED"}
                                    </Text>
                                }
                            </View>
                            <WebView
                                source={{ uri: 'https://www.google.com/maps/@?api=1&map_action=map&center=' + this.props.data.geometry.location.lat + ',' + this.props.data.geometry.location.lng + '&zoom=100' }}
                                style={{ marginTop: 20, height: 250, width: "100%" }}
                            />

                        </ScrollView>
                        <View style={{ position: "absolute", right: 0, top: 0, backgroundColor: "rgba(0,0,0,0.5)", width: "100%" }}>
                            <TouchableOpacity onPress={() => {
                                this.props.shouldShowDetailedView(false)
                            }}>
                                <Image source={require("../../../../../assets/close_btn.png")} style={{
                                    alignSelf: "flex-end", width: 30, height: 30, marginTop: 15, marginRight: 15,
                                    tintColor: "white"

                                }} />
                            </TouchableOpacity>

                        </View>




                    </View>
                </Modal>


            </View >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        showDetailedView: state.nearByCafeReducer.showDetailedView

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ shouldShowDetailedView }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView)
