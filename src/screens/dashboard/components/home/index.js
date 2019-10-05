import React, { Component } from 'react';
import { FlatList, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStories } from './redux/dispatcher'
import ReadMore from 'react-native-read-more-text';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: "",
            storiesList: this.props.stories
        }
    }

    componentDidMount() {
        this.props.getStories()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.stories) {
            this.setState({
                storiesList: nextProps.stories
            })
        }

    }
    _handleTextReady = () => {
        // ...
    }
    _keyExtractor = (item, index) => { "stories+" + index + "-" + item.name + Date() };
    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: "#335569", marginTop: 5, textAlign: "right", marginBottom: 15, fontWeight: "bold" }} onPress={handlePress}>
                Read more
      </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: "#335569", marginTop: 5, marginBottom: 15, textAlign: "right", fontWeight: "bold" }} onPress={handlePress}>
                Show less
      </Text>
        );
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "transparent", marginHorizontal: 20 }}>
                <ScrollView>
                    <View style={{ backgroundColor: "white", marginTop: 50, padding: 20, borderRadius: 10 }}>
                        <Text>
                            What’s Your Coffee Story?
                            </Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder={"Type your story here..."}
                                onChangeText={(text) => {
                                    this.setState({ story: text })
                                }}
                                value={this.state.story} />
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", }}>
                                    <Image source={require('../../../../assets/ic_add_image.png')} style={{ width: 35, height: 35, marginRight: 5 }} />
                                    <Text>Add Photo</Text>

                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                                    <Image source={require('../../../../assets/ic_add_location.png')} style={{ width: 30, height: 30, marginRight: 5 }} />
                                    <Text>Add Location</Text>

                                </View>

                            </View>
                        </View>

                    </View>
                    <FlatList
                        style={{ backgroundColor: "transparent", marginVertical: 20 }}
                        data={this.state.storiesList}
                        keyExtractor={(this._keyExtractor.bind(this))}
                        initialNumToRender={2}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ backgroundColor: "white", marginBottom: 20, borderRadius: 10, }}>

                                    <View style={{ padding: 15, flexDirection: "row" }}>
                                        <Image source={{ uri: item.createdBy.imageUrl }} style={{ height: 50, width: 50, borderRadius: 25, }} />
                                        <View style={{ marginLeft: 15 }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                                                {item.createdBy.name}
                                            </Text>
                                            <Text style={{ fontSize: 12, color: "black" }}>
                                                {item.postedOn}
                                            </Text>
                                            <Text style={{ fontSize: 12 }}>
                                                {item.location}
                                            </Text>
                                        </View>

                                    </View>
                                    <Image source={{ uri: item.imageUrl }} style={{ height: 200, }} />
                                    <Text style={{ padding: 15, fontWeight: "bold", fontSize: 16 }}>
                                        {item.title}
                                    </Text>

                                    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                                        <ReadMore
                                            numberOfLines={5}
                                            renderTruncatedFooter={this._renderTruncatedFooter}
                                            renderRevealedFooter={this._renderRevealedFooter}
                                            onReady={this._handleTextReady}>
                                            <Text style={{ textAlign: "justify" }}>
                                                {item.story}
                                            </Text>
                                        </ReadMore>
                                    </View>

                                </View>


                            )
                        }
                        }
                    />


                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return { stories: state.storyReducer.stories }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)