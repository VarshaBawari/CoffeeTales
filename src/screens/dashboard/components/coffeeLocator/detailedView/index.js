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
import styles from "./styles"
import { API, API_KEY } from '../../../../../constants'

class DetailedView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var uri = ""
        if (this.props.data && this.props.data.photos && this.props.data.photos.length > 0) {
            uri = buildUrl(API.PLACE_PHOTO, {
                photoreference: this.props.data.photos[0].photo_reference,
                maxwidth: 400,
                key: API_KEY.GOOGLE_PLACES,
            })

        }

        return (
            <View style={{ ...styles.container }}>
                <Modal isVisible={this.props.isVisible}>
                    <View style={{ ...styles.innerContainer }}>

                        <ScrollView>

                            <ProgressiveImage style={{ ...styles.imagebanner }}
                                uri={uri}
                            />
                            <View style={{ ...styles.dataContainer }}>
                                {
                                    this.props.data.name &&
                                    <Text
                                        style={{ ...styles.title }}>
                                        {this.props.data.name}
                                    </Text>
                                }
                                {
                                    this.props.data.rating &&
                                    <View style={{ ...styles.ratingContainer }}>
                                        <Text style={{ ...styles.ratingText }}>
                                            {this.props.data.rating}
                                        </Text>
                                        <AirbnbRating
                                            starContainerStyle={{
                                                ...styles.ratingInnerContainer
                                            }}
                                            size={15}
                                            isDisabled={true}
                                            showRating={false}
                                            defaultRating={this.props.data.rating}
                                        />
                                        {
                                            this.props.data.user_ratings_total &&
                                            <Text style={{ ...styles.ratingLabel }}>
                                                {"(" + this.props.data.user_ratings_total + ")"}
                                            </Text>
                                        }
                                    </View>

                                }

                                {
                                    this.props.data.vicinity &&
                                    <Text style={{ ...styles.ratingLabel, paddingTop: 5 }} numberOfLines={1}>
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
                                source={{ uri: API.MAP + this.props.data.geometry.location.lat + ',' + this.props.data.geometry.location.lng + '&zoom=100' }}
                                style={{ ...styles.webView }}
                            />

                        </ScrollView>
                        <View style={{ ...styles.bar }}>
                            <TouchableOpacity onPress={() => {
                                this.props.shouldShowDetailedView(false)
                            }}>
                                <Image source={require("../../../../../assets/close_btn.png")} style={{
                                    ...styles.closeIcon
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
