import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNearByCafes, shouldShowDetailedView } from './redux/dispatcher'
import { buildUrl } from '../../../../utils/urlHelper'
import { ScrollView } from 'react-native-gesture-handler';
import { AirbnbRating } from 'react-native-ratings';
const COFFEE_IMAGE = require('../../../../assets/coffee_beans.png')
import DetailedView from './detailedView'
import ProgressiveImage from '../../../../components/progressiveImage'

class CoffeeLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nearByCafes: this.props.nearByCafes,
            // showDetailedView: this.props.showDetailedView
            selectedItem: null,
        }

    }
    componentDidMount() {
        this.props.getNearByCafes()
    }
    _keyExtractor = (item, index) => { item.id };
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.nearByCafes) {
            this.setState({
                nearByCafes: nextProps.nearByCafes
            })
        }

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "transparent", }}>


                <FlatList style={{ backgroundColor: "transparent", marginVertical: 20, marginHorizontal: 20 }}
                    data={this.state.nearByCafes}
                    keyExtractor={(this._keyExtractor.bind(this))}
                    initialNumToRender={2}
                    renderItem={({ item }) => {
                        var uri = ""
                        if (item.photos && item.photos.length > 0) {
                            uri = buildUrl("https://maps.googleapis.com/maps/api/place/photo", {
                                photoreference: item.photos[0].photo_reference,
                                maxwidth: 400,
                                key: "AIzaSyB3_Mmv6rtaEs_p6-UCc9Dr2g1F907hmQ0",
                            })

                        }

                        return (
                            <View style={{ backgroundColor: "white", marginBottom: 20, borderRadius: 10, }}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        selectedItem: item
                                    })
                                    this.props.shouldShowDetailedView(true)
                                }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <ProgressiveImage style={{ width: 115, height: 115, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}
                                            uri={uri}
                                        />
                                        <View style={{ flex: 1, marginLeft: 15, marginRight: 15, height: 115 }}>
                                            {
                                                item.name &&
                                                <Text
                                                    numberOfLines={1}
                                                    style={{ fontWeight: "bold", fontSize: 16, color: "#335569", paddingTop: 10 }}>
                                                    {item.name}
                                                </Text>
                                            }

                                            {
                                                item.rating &&
                                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, }}>
                                                    <Text style={{ fontSize: 14, color: "black", marginRight: 5 }}>
                                                        {item.rating}
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
                                                        defaultRating={item.rating}
                                                    />
                                                    {
                                                        item.user_ratings_total &&
                                                        <Text style={{ fontSize: 12, color: "black" }}>
                                                            {"(" + item.user_ratings_total + ")"}
                                                        </Text>
                                                    }
                                                </View>

                                            }

                                            {
                                                item.vicinity &&
                                                <Text style={{ fontSize: 12, color: "black", paddingTop: 5 }} numberOfLines={1}>
                                                    {item.vicinity}
                                                </Text>
                                            }

                                            {
                                                item.opening_hours &&
                                                <Text style={{ fontSize: 10, color: item.opening_hours.open_now ? "green" : "gray", paddingTop: 5 }}>
                                                    {item.opening_hours.open_now ? "OPEN NOW" : "CLOSED"}
                                                </Text>
                                            }


                                        </View>
                                    </View>

                                </TouchableOpacity>

                            </View>


                        )
                    }
                    }
                />
                {this.props.showDetailedView && this.state.selectedItem &&
                    <DetailedView isVisible={this.props.showDetailedView} data={this.state.selectedItem} />
                }
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        loadingNearByCafes: state.nearByCafeReducer.loadingNearByCafes,
        nearByCafes: state.nearByCafeReducer.nearByCafes,
        errorMessageNearByCafes: state.nearByCafeReducer.errorMessageNearByCafes,
        isSearchingNearByCafes: state.nearByCafeReducer.isSearchingNearByCafes,
        loadingNearByCafeSearch: state.nearByCafeReducer.loadingNearByCafeSearch,
        searchedNearByCafes: state.nearByCafeReducer.searchedNearByCafes,
        errorMessageNearByCafeSearch: state.nearByCafeReducer.errorMessageNearByCafeSearch,
        next_page_token: state.nearByCafeReducer.next_page_token,
        showDetailedView: state.nearByCafeReducer.showDetailedView
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNearByCafes, shouldShowDetailedView }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeLocator)
